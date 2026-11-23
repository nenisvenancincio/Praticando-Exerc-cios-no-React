import { Box, Typography } from '@mui/material';

interface InfoRowProps {
  label: string;
  value: string;
}

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        {value}
      </Typography>
    </Box>
  )
}

