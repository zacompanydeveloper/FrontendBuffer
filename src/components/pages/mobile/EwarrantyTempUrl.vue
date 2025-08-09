<template>
    <MobileLayout>
        <div>

            <!-- Title -->
            <div class="w-full flex z-40 text-[var(--base-color)] shadow">

                <div class="w-full flex z-40">
                    <div class="flex items-center justify-between p-2 px-3 w-full">
                        <div class="" @click="backFun">
                            <i class="pi pi-arrow-left text-[var(--base-color)] text-2xl" />
                        </div>

                        <p class=" font-bold text-center px-1">
                            {{ $t('e_warranty_activation_agreement') }}
                        </p>
                        <div class="w-10 h-10"></div>
                    </div>
                </div>
            </div>

            <!-- Form Table -->
            <div class=" w-full flex justify-center p-2 text-sm">
                <div class=" bg-white shadow-lg border border-gray-100 rounded-lg w-[500px] p-2 flex flex-col gap-5">

                    <!-- Customer Info -->
                    <div>
                        <p class="text font-bold text-[var(--base-color)]">
                            {{ $t('customer_information') }}
                        </p>
                        <table class=" w-full my-3 border text-xs divide-y">
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('name') }}
                                </td>
                                <td class=" p-2 bg-[var(--light-color)]">U Thura Kyaw Thu Aung San Min Tun</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('phone') }}
                                </td>
                                <td class=" p-2 bg-[var(--light-color)]">09 123456789</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('address') }}</td>
                                <td class=" p-2 bg-[var(--light-color)] text-xs">No.3 Bo Aung San Street,Yadanabon City
                                    Township</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Product Info -->
                    <div>
                        <p class="text-lg font-bold text-[var(--base-color)]">
                            {{ $t('product_information') }}
                        </p>
                        <table class=" w-full my-3 border text-xs divide-y">
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('order_date') }}</td>
                                <td class=" p-2 bg-[var(--light-color)]">2023-10-01</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('product') }}</td>
                                <td class=" p-2 bg-[var(--light-color)]">Samsung Galaxy S21</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('lot_number') }}</td>
                                <td class=" p-2 bg-[var(--light-color)]">SN1234567890</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('category') }}</td>
                                <td class=" p-2 bg-[var(--light-color)]">Phone</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('location') }}</td>
                                <td class=" p-2 bg-[var(--light-color)] text-xs">Sule Square ShowRoom</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Warranty Info -->
                    <div>
                        <p class="text-lg font-bold text-[var(--base-color)]">
                            {{ $t('warranty_information') }}
                        </p>
                        <table class=" w-full my-3 border text-xs divide-y">
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('warranty_type') }}
                                </td>
                                <td class=" p-2 bg-[var(--light-color)]">Standard Warranty</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('warranty_period') }}
                                </td>
                                <td class=" p-2 bg-[var(--light-color)]">1 Year</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Agreement -->
                    <div class=" flex flex-col gap-5">
                        <p class="text-xs text-gray-600 my-3">
                            Before activating your warranty, please carefully read and agree to the following terms.
                            Please read and agree to the following terms before activating your warranty.
                        </p>

                        <div class=" flex justify-center text-xs">
                            <input type="checkbox" id="agreement" class="mr-2 bg-[var(--base-color)]"
                                v-model="agreed" />
                            <p>
                                I have read and agree to warranty terms & conditions.
                            </p>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="flex w-full flex-row-reverse" v-if="agreed">
                        <button class="w-[48%] bg-[var(--base-color)] text-white p-2 rounded-lg">
                            {{ $t('warranty_activate') }}
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </MobileLayout>
</template>
<script setup>
import MobileLayout from '@/layouts/MobileLayout.vue';

</script>