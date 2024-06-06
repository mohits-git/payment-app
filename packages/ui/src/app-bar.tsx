import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  },
  onSignin: any,
  onSignout: any
}

export const Appbar = ({
  user,
  onSignin,
  onSignout
}: AppbarProps) => {
  return <div className="flex justify-between border-b px-4">
    <div className="text-xl font-semibold text-[#6a51a6] flex flex-col justify-center">
      PayTM
    </div>
    <div className="flex flex-col justify-center pt-2">
      <Button
      className="bg-[#6a51a6] hover:bg-[#6d57aa]"
        onClick={user ? onSignout : onSignin}
      >
        {user ? "Logout" : "Login"}
      </Button>
    </div>
  </div>
}
