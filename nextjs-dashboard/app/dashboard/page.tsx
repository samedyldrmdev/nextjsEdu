import { revalidatePath } from 'next/cache';
import Button from './button';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`);
  revalidatePath('/dashboard');
  return res.json();
}

export default async function Page(props: any) {
  const data = await getData();
  return (
    <div>
      {data?.map((user: any, index: number) => (
        <div key={index}>
          {user.name} {user.email}
        </div>
      ))}
      <Button/>
    </div>
  );
}
