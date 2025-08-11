<template>
    <DesktopLayout>
        <div>

            <!-- Title -->
            <div class="w-full flex z-40 text-[var(--base-color)] shadow">

                <div class="w-full flex z-40">
                    <div class="flex items-center justify-between p-2 px-3 w-full">
                        <div class="" @click="backFun">
                            <i class="pi pi-arrow-left text-[var(--base-color)] text-2xl" />
                        </div>

                        <p class=" font-bold text-center text-3xl">
                            {{ $t('e_warranty_activation_agreement') }}
                        </p>
                        <div class="w-10 h-10"></div>
                    </div>
                </div>
            </div>

            <!-- Form Table -->
            <div class=" w-full flex justify-center p-5" v-if="!loading">
                <div class=" bg-white shadow-lg border border-gray-100 rounded-lg w-[500px] p-5 flex flex-col gap-5">

                    <!-- Link Expired -->
                    <div v-if="status && status == 'expired'" class="">

                        <div class=" p-3 bg-red-100 rounded text-center">
                            <p class="text-red-600 py-1 text font-bold">
                                Link Expired!
                            </p>
                            <p class=" text-sm text-red-500">
                                Sorry, the link you are trying to access has expired or is invalid.
                            </p>
                        </div>

                        <div class=" flex justify-center">
                            <img src='https://shassets.sgp1.cdn.digitaloceanspaces.com/home_mall/general/Form%20Application.svg'
                                alt="Expired" class=" h-[200px] w-[200px] object-cover mt-5">
                        </div>
                    </div>

                    <!-- Successfully Activated -->
                    <div v-if="status && status == 'activated'" class="">

                        <div class=" p-3 bg-green-100 rounded text-center">
                            <p class="text-green-600 py-1 text font-bold">
                                Warranty Activated Successfully!
                            </p>
                            <p class=" text-sm text-green-500">
                                Thank you for activating your warranty. Your product is now covered under our warranty policy.
                            </p>
                        </div>

                        <div class=" flex justify-center">
                            <img src='https://shassets.sgp1.cdn.digitaloceanspaces.com/home_mall/general/Form%20Application.svg'
                                alt="Expired" class=" h-[200px] w-[200px] object-cover mt-5">
                        </div>
                    </div>


                    <!-- Customer Info -->
                    <div>
                        <p class="text-lg font-bold text-[var(--base-color)]">
                            {{ $t('customer_information') }}
                        </p>
                        <table class=" w-full my-3 border text-sm divide-y">
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('customer_name') }}
                                </td>
                                <td class=" p-2 bg-[var(--light-color)]">U Thura Kyaw Thu Aung San Min Tun</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('customer_phone') }}
                                </td>
                                <td class=" p-2 bg-[var(--light-color)]">09 123456789</td>
                            </tr>
                            <tr>
                                <td class=" w-[30%] bg-[var(--base-color)] text-white p-2">{{ $t('email') }}</td>
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
                        <table class=" w-full my-3 border text-sm divide-y">
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
                        <table class=" w-full my-3 border text-sm divide-y">
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
                    <div class=" flex flex-col gap-5" v-if="!status">
                        <p class="text-sm text-gray-600 my-3">
                            Before activating your warranty, please carefully read and agree to the following terms.
                            Please read and agree to the following terms before activating your warranty.
                        </p>

                        <div class=" flex justify-center">
                            <input type="checkbox" id="agreement" class="mr-2 bg-[var(--base-color)]"
                                v-model="agreed" />
                            <p>
                                I have read and agree to the warranty terms and conditions.
                            </p>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="flex w-full flex-row-reverse" v-if="agreed && !status">
                        <button class="w-[48%] bg-[var(--base-color)] text-white p-2 rounded-lg">
                            {{ $t('warranty_activate') }}
                        </button>
                    </div>

                </div>
            </div>

            <!-- Loading -->
            <div v-else class="w-full h-[80vh]">
                <Loading />
            </div>
        </div>
    </DesktopLayout>
</template>
<script setup>
import DesktopLayout from '@/layouts/DesktopLayout.vue';
import api from '@/api';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const route = useRoute();
const loading = ref(false);
const status = ref(null);

onMounted(() => {
    fetchData();
});

const agreed = ref(false);

function backFun() {
    router.push('/');
}

function fetchData() {
    loading.value = true;

    api.get('/warranty/informations', {
        'signature': route.params.signature,
        'data': route.params.base64data
    })
        .then(response => {
            if (response.data.success) {
                signature.value = response.data.signature;
                base64data.value = response.data.base64data;
            } else {
                console.error('Error fetching data:', response.data.message);
            }
        })
        .catch(error => {
            console.error(error.response.status);
        })
        .finally(() => {
            loading.value = false;
        });
}


</script>