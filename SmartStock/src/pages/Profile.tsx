import React, { useEffect, useState } from "react";
import { authService } from "../services/authService";
import Sidebar from "./Sidebar";
import foto from "../images/perfil.png";

interface UserProfile {
  id: number;
  nombre: string;
  email: string;
  role: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const userData = JSON.parse(localStorage.getItem("user") || "null");
      if (userData?.user?.id) {
        try {
          const response = await authService.getProfile(userData.user.id);
          setUser(response.data.data);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-[#04345c] text-white px-10 py-8">
        <h1 className="text-4xl font-bold font-Judson mb-6">Profile</h1>
        <div className="ml-20 mt-10 flex flex-row items-center gap-10">
          <img
            src={foto}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />
          <div className="flex flex-col space-y-3">
            <h2 className="text-[50px] font-Judson font-extrabold text-white">
              {user?.nombre || "Usuario no encontrado"}
            </h2>
            <div className="text-white font-Judson italic text-[28px]">
              {user?.email || "Email no encontrado"}
            </div>
            <button className="bg-[#F4F1D9] text-primary text-[28px] font-Judson px-4 py-2 rounded-full shadow flex items-center gap-2 w-fit">
              <svg
                className="h-7 w-7 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
              {user?.role || "Estudiante"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
