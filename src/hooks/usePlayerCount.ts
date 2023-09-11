import useSWR from 'swr'

const usePlayerCount = () => {
  const { isLoading, error, data: playerCount } = useSWR<number>('/lobby/player-count', {
    refreshInterval: 1000,
  })

  return {
    isLoading,
    error,
    playerCount,
  }
}

export default usePlayerCount;
