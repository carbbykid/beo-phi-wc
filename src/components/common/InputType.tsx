import React from "react";

const InputType = React.memo(({ types, ...props }: any) => {
  switch (types) {
    case "textarea":
      return <textarea {...props} />;
    case "number":
      return <input {...props} type={types as number} max={100} min={0} />;

    default:
      return <input {...props} type={types as string} />;
  }
});

export default InputType;
