import React from "react";

import {
  TextField,
  FormControlLabel,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  Button,
FormHelperText
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors,reset} = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const { cafeName, cityName, pin, drinks } = data;
    const res = await fetch(
      "https://cafe-c25a8-default-rtdb.firebaseio.com/cafeBigstore.json",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cafeName,
          cityName,
          pin,
          drinks,
        }),
      }
    );
    reset(res);
    alert('cafe has been added');

    
    
  };
  let history = useHistory();

  function handleClick() {
    history.push("/CafeList");
  }

  return (
    <>
    <h1 style={{textAlign:'center', color:'grey', fontSize:'30px', fontWeight:'bold'}}>CAFE ENTERIES </h1>
      <form
        style={{ width: "50%", margin: "auto" }}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        {/* 1) TextField */}
        <TextField
          placeholder="Enter  Cafe Name"
          label="Cafe Name"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          name="cafeName"
          inputRef={register({
            required: "this field is required.",
            minLength: {
              value: 3,
              message: "Length must be  3 characters",
            },
          })}
          error={Boolean(errors?.cafeName)}
          helperText={errors.cafeName?.message}
        />

        {/* 2) TextField */}
        <TextField
          placeholder="Enter Your City Name"
          label="City Name"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          name="cityName"
          inputRef={register({
            required: "this field is required.",
            minLength: {
              value: 3,
              message: "Length must be  3 characters",
            },
          })}
          error={Boolean(errors?.cityName)}
          helperText={errors.cityName?.message}
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter pinCode"
          label="PinCode"
          variant="outlined"
          type="number"
          fullWidth
          className={classes.inputField}
          name="pin"
          inputRef={register({
            required: "this field is required.",
            minLength: {
              value: 3,
              message: "Length must be  3 characters",
            },
          })}
          error={Boolean(errors?.pin)}
          helperText={errors.pin?.message}
        />

        {/* Radio Buttons */}
        <FormControl className={classes.inputField} error={Boolean(errors.drinks)}>
          <FormLabel>Choose Drinks </FormLabel>
          <RadioGroup row name="drinks">
            <FormControlLabel
              value="<5"
              control={<Radio inputRef={register({
required:"choose drinks option"
              })} />}
              label="drinks < 5"
            />
            <FormControlLabel
              value=">5"
              control={<Radio inputRef={register({
                required:"choose drinks option"
                              })} />}
              label="drinks > 5"
            />
          </RadioGroup>
<FormHelperText>{errors.drinks?.message}</FormHelperText>
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          add new cafe
        </Button>
        <Button style={{marginLeft:'5%'}} variant="contained" color="secondary" onClick={handleClick}>
          Cafe Information
        </Button>
      </form>
    </>
  );
};

export default Home;
