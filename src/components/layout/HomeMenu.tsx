import Image from "next/image";
import MenuItem from "@/components/menu/MenuItem"
import SectionHeaders from '@/components/layout/SectionHeader'

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute w-full left-0 right-0 justify-start ">
        <div className="left-0 -top-[70px] absolute -z-10">
          <Image
            src={"/sallad1.png"}
            width={109}
            height={189}
            alt={"sallad"}
          ></Image>
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image
            src={"/sallad2.png"}
            width={107}
            height={195}
            alt={"sallad"}
          ></Image>
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={'check out'} mainHeader={'Menu'}/>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
      </div>
      </div>
    </section>
  );
}
