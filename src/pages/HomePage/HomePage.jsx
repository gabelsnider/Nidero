import './HomePage.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

function Home() {
  return (
    <div className="home-container">
      <div className="link-to-map">
        <Link to="/map">Explore in the Map</Link>
      </div>
      <div className="flex items-center justify-center min-h-screen">
          <Field className="max-w-sm">
              <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
              <ButtonGroup>
                  <Input
                    id="input-button-group"
                    placeholder="Type to search..."
                    onChange={() => setQuery(e.target.value)} />
                  <Button variant="outline">Search</Button>
              </ButtonGroup>
          </Field>
      </div>
    </div>
  )
}

export default Home;