import {
  UserRoundPlus,
  Swords,
  ArrowUpDown,
  Wrench,
  CircleFadingArrowUp,
  Backpack,
} from "lucide-react";
import { items } from "../layouts/data/itemdata";
import {
  samplecharacterlist
} from "../layouts/data/sampledata";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import ResonatorPopup from "./PlannerContent/ResonatorPopup";
import WeaponPopup from "./PlannerContent/WeaponPopup";
import RearrangePopup from "./PlannerContent/RearrangePopup";
import InventoryPopup from "./PlannerContent/InventoryPopup";
import TaskCards from "./PlannerContent/TaskCards";
import { supabase } from "@/lib/supabaseClient";
import EditResonatorPopup from "./PlannerContent/EditResonatorPopup";
import { Skeleton } from "@/components/ui/skeleton"

const PlannerContent = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // NEW

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setIsLoading(false);
    }

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [selectedTrigger, setSelectedTrigger] = useState("");

  const dialogContentMap = {
    "New Resonator": <ResonatorPopup closeDialog={() => setOpen(false)} />,
    "New Weapon": <WeaponPopup closeDialog={() => setOpen(false)} />,
    "Rearrange Priority": <RearrangePopup closeDialog={() => setOpen(false)} />,
    "Inventory": <InventoryPopup closeDialog={() => setOpen(false)} />,
  };

  return (
    <div className="planner-content">
      {isLoading ? (
        <div className="flex flex-col space-y-3 opacity-25">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ) : user ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <div
            id="planner-controls"
            className="flex gap-2 py-4 border-b-1 border-white/10"
          >
            <DialogTrigger>
              <div
                className="bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition"
                onClick={() => setSelectedTrigger("New Resonator")}
              >
                <UserRoundPlus /> New Resonator
              </div>
            </DialogTrigger>
            <DialogTrigger>
              <div
                className="bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition"
                onClick={() => setSelectedTrigger("New Weapon")}
              >
                <Swords /> New Weapon
              </div>
            </DialogTrigger>
            {/* You can uncomment and use these when ready
            <DialogTrigger>
              <div
                className="bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition"
                onClick={() => setSelectedTrigger("Rearrange Priority")}
              >
                <ArrowUpDown /> Rearrange Priority
              </div>
            </DialogTrigger>
            <div className="grow" />
            <DialogTrigger>
              <div
                className="bg-white/20 hover:bg-white/40 px-4 py-2 flex items-center gap-2 rounded-lg transition"
                onClick={() => setSelectedTrigger("Inventory")}
              >
                <Backpack /> Inventory
              </div>
            </DialogTrigger> */}
          </div>

          <TaskCards />

          <DialogContent className="text-white bg-linear-to-tr from-[#111112] from-15% to-[#222325] to-80% border-0">
            <DialogHeader>
              <DialogTitle className="flex border-b-1 border-b-white/20 pb-6">{selectedTrigger}</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            {dialogContentMap[selectedTrigger]}
          </DialogContent>
        </Dialog>
      ) : (
        <div className="flex w-full min-h-[50vh] justify-center items-center">
          <img src="https://wutheringlab.com/wp-content/uploads/T_ChatEmo_B_02.png" alt="" />
          <div>
            <h1 className="text-2xl pb-2">No access!</h1>
            <p>This feature is for users only. Click on the Avatar at the top-right corner to Log In.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlannerContent;