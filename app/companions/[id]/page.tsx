//localhost:3000/companions/[id]
// Companion Session page

import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface CompanionSessionProps {
  params: Promise<{ id: string}>;
}

// params vs searchParams:
// params: /url/{id} -> id
// searchParams: /url?key=value&key1=value1

const CompanionSession = async({ params }: CompanionSessionProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  if(!user) redirect('/sign-in');
  if(!companion) redirect('/companions');

  console.log(companion);

  return (
    <main>
      <article className="flex rounded-border justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor:getSubjectColor(companion.subject)}}>
          {/* for desktop devices*/}
          <Image src={`/icons/${companion.subject}`} alt={companion.subject} width={35} height={35} />
          </div>

          {/* for all screen sizes*/}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl">
                {companion.name}
              </p>
              <div className="subject-badge max-sm:hidden">
                {companion.subject}
              </div>
            </div>
            <p className="text-lg">{companion.topic}</p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default CompanionSession