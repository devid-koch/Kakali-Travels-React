import { Button, Stack, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  const goBack = () => navigate(-1);

  return (
    <Stack
      minWidth="100vw"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Typography variant="h4" fontWeight={700}>
        Something Went Wrong!
      </Typography>

      <Typography color="text.secondary">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="h6">
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </Typography>
      <Button onClick={goBack} variant="contained">
        Go Back
      </Button>
    </Stack>
  );
}
