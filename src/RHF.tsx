/**
 * [any型で諦めない React.EventCallback - Qiita](https://qiita.com/Takepepe/items/f1ba99a7ca7e66290f24)
 *
 */
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
// import { Props } from './Props'
import './styles.css'

type EventProps = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => void

type DesignType = {
  label: string
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickButton: EventProps
}

type Props = Partial<DesignType>

export const RHF: FC<Props> = ({ label, onClick, onClickButton }) => {
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
      {onClick && <button onClick={onClick}>送信</button>}
      {onClickButton && <button onClick={onClickButton}>送信</button>}
      {/* <input type="submit" /> */}
    </form>
  )
}
