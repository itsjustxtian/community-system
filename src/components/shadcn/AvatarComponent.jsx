import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, Settings } from "lucide-react";
import { supabase } from '../../lib/supabaseClient'
import { useEffect, useState } from "react";


const AvatarComponent = () => {
  const [email, setEmail] = useState('Not Signed In')
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user on mount
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser(user);
        setEmail(user.email ?? 'No Email');
      }
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        setEmail(session.user.email ?? 'No Email');
      } else {
        setUser(null);
        setEmail('Not Signed In');
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Google sign-in error:', error.message);
  };
  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Sign-out error:', error.message);
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="border-1 w-[50px] h-[50px]">
        <AvatarImage
            src={user?.user_metadata?.avatar_url || "https://wutheringlab.com/wp-content/uploads/T_ChatEmo_H_02.png"}
            alt="User Avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account: {email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem onClick={handleSignOut}>
            <Link className="mr-2" /> Sign Out
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={handleSignIn}>
            <Link className="mr-2" /> Sync Account
          </DropdownMenuItem>
        )}
        {user && <DropdownMenuItem><Settings/> Settings</DropdownMenuItem>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarComponent;
