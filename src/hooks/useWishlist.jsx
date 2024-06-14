import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useWishlist = () => {
  const { user } = useAuth();

  const { refetch, data: whishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://dreams-lms-dasboard-server.onrender.com/courses?email=${user.email}`
      );
      return res.data;
    },
  });

  return { whishlist, refetch };
};

export default useWishlist;
