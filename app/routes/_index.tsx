import type { MetaFunction } from "@remix-run/node";
import { Button } from "@material-tailwind/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Welcome to Remix!</h1>
      <p className="mt-3 text-2xl">
        <span className="text-blue-600">Edit </span>
        <code className="bg-gray-100 rounded p-2 font-mono text-lg">
          app/routes/_index.tsx
        </code>
        <Button>@material-tailwind/react Button -_-</Button>
        <span> and save to test HMR updates.</span>
      </p>
    </div>
  );
}
