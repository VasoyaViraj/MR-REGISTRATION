"use client";

import React, { useState } from "react";
import {Button, Input, Checkbox, Link} from "@nextui-org/react";
import { databases, client } from '../services/Database';
import {Icon} from "@iconify/react";
import { Databases } from "appwrite";

const FanFicRegestration : React.FC = () => {

  let [dataa,setDataa] = useState({
    'teamName':'',

    'teamLeadName':'',
    'teamLeadContactNumber':'',
    'teamLeadRollNo':'',

    'teamMember2Name':'',
    'teamMember2ContactNumber':'',
    'teamMember2RollNumber':'',

    'teamMember3Name':'',
    'teamMember3ContactNumber':'',
    'teamMember3RollNumber':'',

    'teamMember4Name':'',
    'teamMember4ContactNumber':'',
    'teamMember4RollNumber':'',

  })

  async function handleClick(e : any){

    try{

      const response = databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASEID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONID!,
        // '677305ac00095c78d53e',
        // '678206e200050747c3fe',
        'unique()',
        dataa
      )

      console.log("done");
      console.log(response);
      
      
      window.localStorage.setItem('TeamName',dataa.teamName)

    }catch{
      console.log(e);
    }
  }

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-black to-[#071f8b] text-white">
      
        <div className="flex w-full mt-28 max-w-sm flex-col gap-4 rounded-large px-14 pb-10 pt-6 z-20 relative border-2 border-white bg-[rgba(240,248,255,0.097)] text-[#e3f4e6]">

          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute z-10 h-[100px] w-[100px] fill-none stroke-[#ff2050] stroke-[8px] top-32 left-2">
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute z-10 h-[150px] w-[150px] fill-none stroke-[#ff2050] stroke-[8px] top-[350px] left-56">
            <rect x="25" y="25" width="70" height="70" />
          </svg>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="absolute z-10 h-[120px] w-[120px] fill-none stroke-[#ff2050] stroke-[8px] top-[800px] left-2">
            <polygon points="50,15 90,85 10,85" />
          </svg>

          <p 
            className={`pb-4 text-center text-3xl font-bold text-[#8CF954]`}
          >
            Fan Fiction Quiz
          </p>

          <form className="flex flex-col gap-4 z-50" onSubmit={(e) => e.preventDefault()}>

            <Input
              isRequired
              label="Teamname"
              labelPlacement="outside"
              name="teamName"
              value={dataa.teamName}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamName : e.target.value})}
              placeholder="Enter your teamname"
              type="text"
              variant="bordered"
            />

            <Input
              isRequired
              label="Team lead name"
              labelPlacement="outside"
              name="teamLeadName"
              // value="teamLeadName"
              value={dataa.teamLeadName}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamLeadName : e.target.value})}
              placeholder="Enter team lead name"
              type="text"
              variant="bordered"
            />
            <Input
              isRequired
              label="Team lead contact number"
              labelPlacement="outside"
              name="teamLeadContactNumber"
              // value="teamLeadContactNumber"
              value={dataa.teamLeadContactNumber}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamLeadContactNumber : e.target.value})}
              placeholder="Enter team lead contact number"
              type="text"
              variant="bordered"
            />
            <Input
              isRequired
              label="Team lead roll no"
              labelPlacement="outside"
              name="teamLeadRollNo"
              // value="teamLeadRollNo"
              value={dataa.teamLeadRollNo}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamLeadRollNo : e.target.value})}
              placeholder="Enter your team lead contact number"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 2 name"
              labelPlacement="outside"
              name="teamMember2Name"
              // value="teamMember2Name"
              value={dataa.teamMember2Name}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember2Name : e.target.value})}
              placeholder="Enter team member 2 name"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 2 contact number"
              labelPlacement="outside"
              name="teamMember2ContactNumber"
              // value="teamMember2ContactNumber"
              value={dataa.teamMember2ContactNumber}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember2ContactNumber : e.target.value})}
              placeholder="Enter team member 2 contact number"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 2 roll number"
              labelPlacement="outside"
              name="teamMember2RollNumber"
              // value="teamMember2RollNumber"
              value={dataa.teamMember2RollNumber}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember2RollNumber : e.target.value})}
              placeholder="Enter team member 2 roll number"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 3 name"
              labelPlacement="outside"
              name="teamMember3Name"
              // value="teamMember3Name"
              value={dataa.teamMember3Name}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember3Name : e.target.value})}
              placeholder="Enter team member 3 name"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 3 contact number"
              labelPlacement="outside"
              name="teamMember3ContactNumber"
              // value="teamMember3ContactNumber"
              value={dataa.teamMember3ContactNumber}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember3ContactNumber : e.target.value})}
              placeholder="Enter team member 3 contact number"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 3 roll number"
              labelPlacement="outside"
              name="teamMember3RollNumber"
              // value="teamMember3RollNumber"
              value={dataa.teamMember3RollNumber}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember3RollNumber : e.target.value})}
              placeholder="Enter team member 3 roll number"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 4 name"
              labelPlacement="outside"
              name="teamMember4Name"
              // value="teamMember4Name"
              value={dataa.teamMember4Name}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember4Name : e.target.value})}
              placeholder="Enter team member 4 name"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 4 contact number"
              labelPlacement="outside"
              name="teamMember4ContactNumber"
              // value="teamMember4ContactNumber"
              value={dataa.teamMember4ContactNumber}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember4ContactNumber : e.target.value})}
              placeholder="Enter team member 4 contact number"
              type="text"
              variant="bordered"
            />
            <Input
              
              label="Team member 4 roll number"
              labelPlacement="outside"
              name="teamMember4RollNumber"
              // value="teamMember4RollNumber"
              value={dataa.teamMember4RollNumber}
              onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDataa({...dataa, teamMember4RollNumber : e.target.value})}
              placeholder="Enter team member 4 roll number"
              type="text"
              variant="bordered"
            />


            <Button color="primary" type="submit" className="mt-2 bg-[#9eec4b] text-[#071f8b] text-[15px] font-bold" onPress={handleClick}>
              Register
            </Button>

          </form>

        </div>
      </div>
    </>
  );
}

export default FanFicRegestration