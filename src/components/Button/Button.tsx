type Props = {
  variant?: 'default' | 'dark' | 'primary' | 'light'
  children: React.ReactNode;
}

export function Button({ variant, children }: Props) {
  let bgColor = 'text-black';
  if (variant === 'primary') 
    bgColor = 'bg-primary text-white hover:bg-primaryLight active:bg-primaryDark transition-all'
  if (variant === 'light') bgColor = 'bg-primaryLight text-white'
  if (variant === 'dark') bgColor = 'bg-primaryDark text-white'

  return (
    <button className={`py-2 px-4 rounded-md ${bgColor} font-bold`}>
      {children}
    </button> 
  )
}