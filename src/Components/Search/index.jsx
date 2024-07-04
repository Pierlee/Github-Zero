import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Search () {
  const [value, setValue] = useState('')
  return (
    <div>
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      <Button icon="pi pi-search" severity="success" aria-label="Search" />
    </div>
  )
}
