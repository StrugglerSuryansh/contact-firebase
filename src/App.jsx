import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { RiEditCircleFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactLists);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative flex-grow items-center">
          <FiSearch className="absolute ml-1 text-white text-3xl" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white "
          />
        </div>
        <div>
          <AiFillPlusCircle className="text-white text-4xl cursor-pointer" />
        </div>
      </div>
      <div className="mt-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex justify-between bg-yellow items-center gap-2 p-2 rounded-md mb-2">
            <div className="flex items-center gap-2">
              <HiOutlineUserCircle className=" text-4xl text-orange" />
              <div className="text-black">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
                <p className="">{contact.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-3xl">
              <RiEditCircleFill className="text-black  cursor-pointer" />
              <FaTrashAlt className="text-black  cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}