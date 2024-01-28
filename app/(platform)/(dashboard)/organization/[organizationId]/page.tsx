import { db } from "@/lib/db";
import Info from "./_components/Info";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="w-full mb-20">
      <Info />
    </div>
  );
};

export default OrganizationIdPage;