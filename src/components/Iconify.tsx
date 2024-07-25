import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Iconify = forwardRef(({ icon, width = 20, sx, ...other }: any, ref: any) => (
    <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

Iconify.displayName = "Iconify";
Iconify.propTypes = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sx: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Iconify;