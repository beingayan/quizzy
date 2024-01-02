import FormHelperText from "@mui/material/FormHelperText";

export const errorMsg = (msg) => (
<FormHelperText sx={{ color: "red" }}>
    {msg}
</FormHelperText>
);