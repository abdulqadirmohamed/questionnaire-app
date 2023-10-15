import Link from "next/link";
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineCalendar } from 'react-icons/ai'
import { LuContact } from 'react-icons/lu'
import { BsClipboardData } from 'react-icons/bs'


const HomePage = () => {
  return (
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-4 gap-10 my-5">
          <div className="text-center">
            <Link
              href="/"
              className="flex flex-col items-center justify-center text-red-500 bg-[#FFE2E6] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md"
            >
              <BsClipboardData size={30} />
            </Link>
            <h5 className="my-2">Total Responses</h5>
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="flex flex-col items-center justify-center text-yellow-500 bg-[#FFF4DE] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md"
            >
              <LuContact size={25} />
            </Link>
            <h5 className="my-2">Completed</h5>
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="flex flex-col items-center justify-center text-green-500 bg-[#DCFCE7] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md"
            >
              <AiOutlineCalendar size={25} />
            </Link>
            <h5 className="my-2">Completion</h5>
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="flex flex-col items-center justify-center text-white bg-[#F4E8FF] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md"
            >
              <IoIosAdd size={40} />
            </Link>
            <h5 className="my-2">Blank</h5>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
