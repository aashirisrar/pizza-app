import prismadb from "./prismadb";

export const getUsers = async () => {
  prismadb.user.create({
    data: { name: "John", email: "aashirisrar@123@gmail.com" },
  });
};
