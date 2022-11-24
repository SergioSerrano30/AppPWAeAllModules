import Typography from '@mui/material/Typography';

import Meta from '@/Commerce/components/Meta';
import { FullSizeCenteredFlexBox } from '@/Commerce/components/styled';

function Page2() {
  return (
    <>
      <Meta title="page 2" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Page 2</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page2;
