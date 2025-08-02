import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function AuthGuard({ children }: { children: React.ReactNode }) {

  const router = useRouter();
  const isAuthRoute = false;

  useEffect(() => {
    if (!isAuthRoute) {
      const isAuthenticated = false;
      if (!isAuthenticated) {
        router.replace('/auth');
      }
    }
  })

  return <>{children}</>
}

export default function RootLayout() {
  return (
    <AuthGuard>
      <Stack>
        <Stack.Screen name='(tab)' options={{ headerShown: false }} />
      </Stack>
    </AuthGuard>
  );
}
