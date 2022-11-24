import Typography from '@mui/material/Typography';

import Meta from '@/Commerce/components/Meta';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';

function Page1() {
  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Page 1</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page1;
