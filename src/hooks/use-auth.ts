import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAuth = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error();
      }
      toast.success("sair com sucesso");
      router.push("/sign-in");
      router.refresh();
    } catch (err) {
      toast.error("Não foi possível sair, por favor tente novamente.");
    }
  };
  return { signOut };
};
