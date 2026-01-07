//localhost:3000/companions/new
// Companion Builder page

import CompanionForm from "@/components/CompanionForm"

const NewCompanion = () => {
  return (
    <main>
      <article>
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanion