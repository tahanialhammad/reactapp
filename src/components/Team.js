import React from "react";
import TeamMember from "./TeamMember";
function Team() {
  const teamInfo = [
    {
      id: 1,
      name: "hashem",
      img: "https://picsum.photos/200",
      email: "hashem@yahoo.com",
      phone: "123",
    },
    {
      id: 2,
      name: "tahani",
      img: "https://picsum.photos/201",
      email: "tahani@yahoo.com",
    },
  ];

  const temaMembers = teamInfo.map(member => <TeamMember 
                                    key = {member.id}
                                    name ={member.name}
                                    img={member.img}
                                    email={member.email}
                                    phone={member.phone}
                                  />);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Teams
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {/* Team info in JSON */}
            {/* <TeamMember 
                teamInfo = {
                  {
                    name : "hashem",
                    img : "https://picsum.photos/200",
                    email : "hashem@yahoo.com",
                    phone :'123'
                  }
                }
            />

              <TeamMember 
                teamInfo = {
                  {
                    name : "tahani",
                    img : "https://picsum.photos/201",
                    email : "tahani@yahoo.com"
                  }
                }
            /> */}

            {/* Beter Way */}
            {temaMembers}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
