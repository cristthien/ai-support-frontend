import { useRouter } from "next/navigation";

export default function LoginButton() {
const router = useRouter();

return ( <div className="flex justify-end p-4">
<button
onClick={() => router.push('/login')}
className="
flex items-center justify-center
bg-gray-800 text-white font-semibold
px-5 py-2 rounded-lg shadow-sm
border border-gray-700
hover:bg-gray-700 hover:shadow-md
transition-all duration-200
"
>
Login </button> </div>
);
}
