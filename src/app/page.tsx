import Fedora from "@/components/fedora";
import { StateProvider } from "@/components/stateProvider";

export default function Home() {
  return (
    <StateProvider>
      <Fedora />
    </StateProvider>
  );
}
