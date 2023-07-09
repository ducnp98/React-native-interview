import React from 'react'
import { Text, View } from 'react-native'

const HeaderInformation = () => {
  return (
    <View className="w-full bg-slate-900 rounded-t-xl">
      <View className="flex flex-row py-7 items-center">
        <View className="flex items-center w-20">
          <Text className="text-3xl text-white font-bold">12</Text>
        </View>
        <View className="flex flex-1">
          <View>
            <Text className="text-xl text-white">December</Text>
            <Text className="text-base text-gray-400">N95899</Text>
          </View>
        </View>
        <View className="pr-6">
          <Text className="text-2xl text-white">$65.00</Text>
        </View>
      </View>
    </View>
  )
}

export default HeaderInformation