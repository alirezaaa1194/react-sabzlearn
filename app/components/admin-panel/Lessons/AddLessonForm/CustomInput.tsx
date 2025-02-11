import { Input } from "@heroui/input";
import { MagnifyingGlassIcon } from "public/svg/svgs";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function CustomInput({ name, label, placeholder }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          classNames={{
            inputWrapper: `bg-dark hover:!bg-white/10 text-white font-DanaMedium focus:!bg-dark rounded-md border border-transparent`,
            label: "text-white font-lalezar text-lg",
          }}
          label={label}
          labelPlacement="outside"
          placeholder={placeholder}
          startContent={<MagnifyingGlassIcon className="size-5 text-default-400 pointer-events-none flex-shrink-0" />}
          type="text"
          isInvalid={!!error}
          errorMessage={<span className="font-DanaMedium text-sm">{error?.message}</span>}
        />
      )}
    />
  );
}

export default CustomInput;
