import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { api } from "../services/api";
import { database } from "../database";
import { User as ModelUser } from "../database/models/User";

interface User {
  id: string; //User ID DB
  user_id: string; //User ID api
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  updateUser(user: User): Promise<void>;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }: any) => {
  const [data, setData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const {
        data: { token, user },
      } = await api.post("/sessions", {
        email,
        password,
      });
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      console.log(user);

      const userCollection = database.get<ModelUser>("users");
      await database.write(async () => {
        await userCollection.create((newUser) => {
          (newUser.user_id = user.id),
            (newUser.name = user.name),
            (newUser.email = user.email),
            (newUser.driver_license = user.driver_license),
            (newUser.avatar = user.avatar),
            (newUser.token = token);
        });
      });
      setData({ ...user, token });
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };

  const signOut = async () => {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as User);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const updateUser = async (user: User) => {
    try {
      const userCollection = database.get<ModelUser>("users");
      await database.write(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update((userData) => {
          (userData.name = user.name),
            (userData.driver_license = user.driver_license),
            (userData.avatar = user.avatar);
        });
      });
      setData({ ...user });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    async function loadStorageData() {
      try {
        const userCollection = database.get<ModelUser>("users");
        const response = await userCollection.query().fetch();
        if (response.length > 0) {
          const userData = response[0]._raw as unknown as User;
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${userData.token}`;
          setData(userData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
