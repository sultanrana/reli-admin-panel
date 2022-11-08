import Sidebar from "../../components/Sidebar";
import BeardcrumNavigator from "../../components/BeardcrumNavigator";
import { Box, Card, Typography } from "@mui/material";
import services from "../../mock/services";
import { useSelector } from "react-redux";

const Services = () => {
  const {isDrawerOpen} = useSelector((store) => store.login)
  const breadcrumbs = [
    <Typography key="3" color="text.primary" style={{
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '34px',
      lineHeight: '36px',
      color: '#000000'
    }}>
      Services
    </Typography>
  ];
  return (
    <div className="page-section">
      <Sidebar/>
      <Box className="page-content" sx={{width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`}}>
        <BeardcrumNavigator breadcrumbs={breadcrumbs}/>
        <Card variant="outlined" sx={{
          padding: '16px',
          boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
          borderRadius: 0,
        }}>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '16px'
          }}>
            {services.map((service) => {
              return (
                <Card key={service.id} sx={{
                  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                  padding: '16px',
                  borderRadius: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                >
                    <img src={service.src} alt="" style={{width: ''}} />
                    <Typography variant="h3" component="h1" sx={{
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '24px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      letterSpacing: '0.18px',
                      mt: 2,
                      textTransform: 'capitalize',
                      width: '172px'
                    }}>
                      {service.title}
                    </Typography>
                </Card>
              )
            })}
            
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default Services;
