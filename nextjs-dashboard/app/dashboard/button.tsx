'use client'

import * as crypto from "crypto";
import { revalidatePath } from "next/cache";

async function setData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
      method: 'POST',
      body: JSON.stringify({
        id: `410544b2-4001-9071-9855-fec4b6a6442a`,
        name: 'Samet',
        email: 'samettest@gmail.com',
        password: 'test',
      }),
    });
    return await res.json();
  }
export default function Button(){
    return (
        <button onClick={setData}>User ekle</button>
    )
}