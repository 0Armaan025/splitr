import { cookies } from "next/headers";

export async function apiFetch(path: string, options: RequestInit = {}) {
    const token = localStorage.getItem('token');
    return fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'}${path}`, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: token? `Bearer ${token}`:"",
            "Content-Type": "application/json",
        },
    }).then(res => res.json());

}



export async function setAuthCookie(token: string) {
(await cookies()).set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
}
