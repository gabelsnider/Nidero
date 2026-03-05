import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <Field className="max-w-sm">
            <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
            <ButtonGroup>
                <Input id="input-button-group" placeholder="Type to search..." />
                <Button variant="outline">Search</Button>
            </ButtonGroup>
        </Field>
    </div>
  )
}

export default Home;