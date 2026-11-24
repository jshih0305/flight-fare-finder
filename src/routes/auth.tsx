import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

import { AuthCard } from "@/components/AuthCard";
import { EmailPasswordForm } from "@/components/EmailPasswordForm";
import { supabase } from "@/integrations/supabase/client";
import { usePageMeta, type MetaTag } from "@/lib/page-meta";

const pageMeta: MetaTag[] = [
  { title: "Sign in / 登入 — Flight Price Notifier" },
  { name: "description", content: "Sign in to Flight Price Notifier to manage your flight price alerts." },
  { property: "og:title", content: "Sign in — Flight Price Notifier" },
  { property: "og:description", content: "Sign in to manage your Taipei flight price alerts." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

export function SignInPage() {
  usePageMeta(pageMeta);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/app", { replace: true });
    });
  }, [navigate]);

  async function handleSignIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return error.message === "Invalid login credentials"
        ? "Email 或密碼不正確 / Invalid email or password."
        : error.message;
    }
    navigate("/app", { replace: true });
    return null;
  }

  return (
    <AuthCard
      title="歡迎回來 / Welcome back"
      subtitle="登入查看你的航線追蹤。Sign in to your account."
      footer={
        <>
          還沒有帳號？{" "}
          <Link to="/signup" className="font-medium text-primary-glow hover:underline">
            註冊 / Sign up
          </Link>
        </>
      }
    >
      <EmailPasswordForm submitLabel="Sign in / 登入" passwordAutoComplete="current-password" onSubmit={handleSignIn} />
    </AuthCard>
  );
}
