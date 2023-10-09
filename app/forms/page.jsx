import Link from "next/link";
import React from "react";
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineContacts, AiOutlineCalendar } from 'react-icons/ai'
import { LuContact } from 'react-icons/lu'

const page = () => {
  return (
  <div className="w-[95%] mx-auto">
    <h1 className="mt-5">Start a new form</h1>
    <div className="grid grid-cols-4 gap-10 my-5">
      <div className="text-center">
        <Link href="/forms/newform" className="flex flex-col items-center justify-center bg-white text-[#545FDD] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md">
          <IoIosAdd size={40} />
        </Link>
        <h5 className="my-2">Blank</h5>
      </div>
      <div className="text-center">
        <Link href="#" className="flex flex-col items-center justify-center bg-white text-[#545FDD] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md">
          <LuContact size={25} />
        </Link>
        <h5 className="my-2">Contact Information</h5>
      </div>
      <div className="text-center">
        <Link href="#" className="flex flex-col items-center justify-center bg-white text-[#545FDD] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md">
          <AiOutlineCalendar size={25} />
        </Link>
        <h5 className="my-2">Find time</h5>
      </div>
      <div className="text-center">
        <Link href="#" className="flex flex-col items-center justify-center bg-white text-[#545FDD] border-[1px] hover:border-[#545FDD] h-[100px] p-5 rounded-md">
          <IoIosAdd size={40} />
        </Link>
        <h5 className="my-2">Blank</h5>
      </div>
    </div>
  </div>
  )
};

export default page;
