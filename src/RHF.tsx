import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
// import { Props } from './Props'

import './styles.css'

type Props = Partial<{
  label: string
  onClick: (event: any) => void
  onChange: (event: any) => void
  onkeypress: (event: any) => void
  onBlur: (event: any) => void
  onFocus: (event: any) => void
  onSubmit: (event: any) => void
  onClickDiv: (event: any) => void
}>

export const RHF: FC<Props> = ({ label, onClick }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: 'AAA',
      exampleRequired: 'BBB',
    },
  })

  console.log(watch('example')) // you can watch individual input by pass the name of the input

  return (
    <form
      onSubmit={handleSubmit(function (data) {
        // alert(JSON.stringify(data))
        console.log(JSON.stringify(data))
      })}
    >
      <label>{label}</label>
      <input {...register('example')} defaultValue="test" />
      <label>ExampleRequired</label>
      <input
        {...register('exampleRequired', { required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <button onClick={onClick}>送信</button>
      {/* <input type="submit" /> */}
    </form>
  )
}
