import client from "./client";

interface UserServiceChidlren {
  login: (data: { username: string; password: string }) => Promise<string>;
  getMyInformation: () => Promise<any>;
}

const UserService: UserServiceChidlren = {
  login: async (data) => {
    const result = await client.post("/user/login", data);
    return result.data.data;
  },
  getMyInformation: async () => {
    const result = await client.get("/user/me");
    return result.data.data;
  },
};

export default UserService;