"use client";
import { Modal } from "@/components";
import { createContextsearch } from "@/components/addCreateContext/CreateContext";

import { CardList } from "@/components/organism";
import { FormUpdate, ValidationForm } from "@/components/organism/form";
import { SearchInput } from "@/components/organism/form/SearchInput";
import React, { useState } from "react";
export interface User {
  id: string;
  username: string;
  profile: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectCard, setSelectCard] = useState("");
  const [search, setSearch] = useState("");
  const selectedUser = users.filter((user) => {
    if (user.id === selectCard) {
      return user;
    }
  });

  const handleDeleteCard = (id: string) => {
    const deleteItem = users.filter((users) => users.id !== id);
    setUsers(deleteItem);
  };
    const handleSearch =users.filter((item)=>{
      if(item.username.toLowerCase().includes(search.toLowerCase())){
        return item;
      }
    })
  return (
    <div className="inline-block items-center justify-center mx-auto w-full">
      <createContextsearch.Provider value={{setSearch}}>
        <SearchInput />
      </createContextsearch.Provider>
     
      {search ? (
        <>
          {/* <AddSearch.Provider value={{search,users,handleDeleteCard}}  >
          <SearchCard />
          </AddSearch.Provider> */}
          <CardList
            onDeleteCard={handleDeleteCard}
            // items={users.filter((user) =>
            //   user.username.toLowerCase().includes(search.toLowerCase())
            // )}
            items={handleSearch}
            selectCard={selectCard}
            onSelectCard={setSelectCard}
          />
        </>
      ) : (
        <>
          <CardList
            onDeleteCard={handleDeleteCard}
            items={users}
            selectCard={selectCard}
            onSelectCard={setSelectCard}
          />
        </>
      )}

      <Modal selectCard={selectCard}>
        {selectedUser.length > 0 ? (
          <>
            <FormUpdate selectedUser={selectedUser[0]} updateUser={setUsers} />
          </>
        ) : (
          <>
            <ValidationForm addNewUser={setUsers} />
          </>
        )}

        {/* {selectedUser.length > 0 ? (
          <FormUpdate userData={users} selectCard={selectCard} getValue={selectedUser[0]} />
        ) : (
          <FormAdd addNewUser={setUsers} getValue={{ username: "", profile: "" }} />
        )} */}
      </Modal>
    </div>
  );
}
