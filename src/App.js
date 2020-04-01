import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './App.css';

export default function Product() {
  return (
    <Container component="main" maxWidth="xs">
     <Paper>
      <CssBaseline />
        <Card />
        <div className="dashed"></div>
        <BestPriceView />
     </Paper> 
    </Container>
  );
}

function Card() {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <Typography className={classes.cashback} component="h1" variant="h5">
            Upto 5% Cashback <HelpOutlineIcon className="question_icon" />
            </Typography>

            <Typography className={classes.price} component="h1" variant="h5">
            from <br />
            <span className={classes.amount}>&euro; 139</span>
            </Typography>

            <DateForm />
        </div>
    );
}

function DateForm() {
    const classes = useStyles();

    return(
        <form className={classes.form} noValidate>
          
          <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value="none"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoComplete="current-password"
          >
           <MenuItem value="none">Select a date</MenuItem>
           <MenuItem value="date1">Date 1</MenuItem>
           <MenuItem value="date2">Date 2</MenuItem>
           <MenuItem value="date3">Date 3</MenuItem>
        </Select>
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           CHECK AVAILABILITY
          </Button>
        </form>
    );
}

function BestPriceView() {
    return (
            <Grid container>
                <Grid className="footer_text" item xs> BEST PRICE GUARANTEED </Grid>
            </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    price:{ paddingTop: '15px',
             paddingBottom: '15px',
             marginLeft: '10px',
             marginRight: '10px',
             color:'#6b6b6b'
           },
  card: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    padding:'8px 16px'
  },
  cashback:{ paddingTop: '10px',
             paddingBottom: '10px',
             borderBottom: '1px solid #ececec',
             marginLeft: '10px',
             marginRight: '10px',
             color:'#6b6b6b',
             fontSize: '15px'
           },
  amount:{color:'#000'},         
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: 'linear-gradient(to right, #FF6186, #F4144A)',
    fontSize: '16'
  },
}));