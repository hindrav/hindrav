import { Box } from '@mui/material';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import "./Resume.scss";

const Resume = () => {
  return (
    <Box className="xp">
        <Box className="xp-container">
            <h2>My latest experience</h2>
            <Box className="xp-box">
                <Box className="xp-item">
                    <h2><FilterCenterFocusIcon /> Frontend Engineer</h2>
                    <Box className="xp-item__header">
                        <a href="https://www.gruposalinas.com/">Grupo Salinas</a>
                        <span>(2022 - Present)</span>
                    </Box>
                    <Box className="xp-item__body">
                        <ul>
                            <li>Development of visually appealing, highly usable, and optimized interfaces.</li>
                            <li>Implementation of modular architectures.</li>
                            <li>Utilization of agile methodologies and modern technologies.</li>
                            <li>Continuous improvement of the performance of the core application within the group.</li>
                            <li>Implementation of testing and debugging practices to minimize errors.</li>
                        </ul>
                    </Box>
                </Box>
                <Box className="xp-item">
                    <h2><FilterCenterFocusIcon /> Fullstack Developer</h2>
                    <Box className="xp-item__header">
                        <a href="https://www.elpuertodeliverpool.mx/">El Puerto de Liverpool</a>
                        <span>(2018 - 2022)</span>
                    </Box>
                    <Box className="xp-item__body">
                        <ul>
                            <li>Full-stack web platforms dev. (Django + React).</li>
                            <li>Automation of processes using VBA in SAP ERP.</li>
                            <li>Development and maintenance of databases.</li>
                            <li>Data Analysis and Business Intelligence Visualization</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export { Resume };