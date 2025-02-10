import { Input } from "@heroui/input";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

function FileInput({ name, label }:any) {
    const { control } = useFormContext();
    const [fileName, setFileName] = useState('');
  
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...rest }, fieldState: { error } }) => (
          <>
            <Input
              {...rest}
              type="file"
              onChange={(e:any) => {
                const file = e.target.files[0];
                if (file) {
                  setFileName(file.name);
                  onChange(file);
                }
              }}
              classNames={{
                base: "w-full md:w-1/3",
                inputWrapper: "w-full bg-dark hover:!bg-white/10 text-white font-DanaMedium focus:!bg-dark rounded-md",
                label: "text-white font-lalezar text-lg"
              }}
              label={label}
              labelPlacement="outside"
              isInvalid={!!error}
              errorMessage={error?.message}
            />
          </>
        )}
      />
    );
  }
  
  export default FileInput;