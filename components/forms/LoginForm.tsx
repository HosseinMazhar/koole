"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, Typography, Link } from "@mui/material";
import KooleLogo from "../../assets/icons/KooleLogo";
import { loginSchema, LoginFormData } from "../../lib/schemas/login.schema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="w-full max-w-sm p-6 my-4 mx-2 bg-gray-50 rounded-2xl border border-border flex flex-col items-center">
      <KooleLogo width="120px" height="120px" color="#9333ea" />

      <Typography variant="h5" className="mt-2">
        به کوله خوش آمدید!
      </Typography>

      <Typography variant="body2" color="text.secondary" className="mt-4">
        به حساب خود وارد شوید
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-6 flex flex-col gap-4"
      >
        <TextField
          label="نام کاربری"
          fullWidth
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          label="رمز عبور"
          type="password"
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
        >
          ورود
        </Button>
      </form>

      <div className="w-full flex justify-between mt-4">
        <Link href="/forgot-password" underline="hover">
          رمز عبور خود را فراموش کرده‌اید؟
        </Link>

        <Link href="/register" underline="hover">
          ثبت‌نام
        </Link>
      </div>
    </div>
  );
}
