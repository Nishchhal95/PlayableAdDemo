public static class LunaManager
{
    public static void End()
    {
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();
    }
}
