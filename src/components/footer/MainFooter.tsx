import { Star } from "@mui/icons-material";
import HeaderLink, { HeaderLinkType } from "../header/HeaderLink";
import FooterLink from "./FooterLink";

export default function MainFooter() {
    return <div className="flex flex-col items-center gap-26 bg-black text-white px-20 py-30">
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl">
            <div className="flex flex-col gap-6 text-5xl pt-20">
                Consolidate projects, clients, and billing into one integrated platform.

                <div className="flex gap-2 text-gray-400">
                    <div className="text-sm">
                        <Star fontSize="small" />
                        <Star fontSize="small" />
                        <Star fontSize="small" />
                        <Star fontSize="small" />
                        <Star fontSize="small" />
                    </div>

                    <div className="text-sm">
                        1,020+ Reviews
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-center h-50 rounded-lg relative overflow-hidden">
                    <HeaderLink title="Get started" type={HeaderLinkType.WHITE_BUTTON} />
                    <img src="/misc/backdrop1.jpg" className="absolute z-0" />
                </div>

                <div className="flex flex-col gap-10 p-6 bg-gray-800 rounded-lg">
                    <div className="text-lg">
                        “Birch streamlines operations in our thriving team of 32+ people. Its blend of simplicity and data-driven insights are invaluable as we scale and grow.”
                    </div>

                    <div>
                        <div className="font-bold">
                            John
                        </div>
                        <div>
                            CEO, Zajeb Media
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex gap-10 max-w-md lg:max-w-7xl">
            <div className="flex flex-wrap gap-32">
                <div className="flex flex-col gap-2">
                    Products
                    <FooterLink title="CRM" />
                    <FooterLink title="Pipeline" />
                    <FooterLink title="Estimates" />
                    <FooterLink title="Proposals" />
                    <FooterLink title="Agreements" />
                    <FooterLink title="Forms" />
                    <FooterLink title="Client portal" />
                    <FooterLink title="Projects" />
                    <FooterLink title="Task management" />
                    <FooterLink title="Time tracking" />
                    <FooterLink title="Time sheets" />
                    <FooterLink title="Resource planning" />
                    <FooterLink title="Reporting" />
                    <FooterLink title="Billing" />
                    <FooterLink title="Expenses" />
                    <FooterLink title="Payments" />
                    <FooterLink title="Bookkeeping" />
                    <FooterLink title="Rate cards" />
                    <FooterLink title="Budgeting" />

                    <div className="pt-16 flex flex-col gap-2">
                        <FooterLink title="Customer stories" />
                        <FooterLink title="Pricing" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    Solutions
                    <FooterLink title="Creative agencies" />
                    <FooterLink title="Marketing agencies" />
                    <FooterLink title="Software agencies" />
                    <FooterLink title="Consulting" />
                    <FooterLink title="Engineering" />
                    <FooterLink title="IT Services" />
                    <FooterLink title="Accounting" />
                    <FooterLink title="Architecture" />
                    <FooterLink title="Interior design" />
                    <FooterLink title="See all industries" />

                    <div className="pt-16 flex flex-col gap-2">
                        <FooterLink title="Owners" />
                        <FooterLink title="Project managers" />
                        <FooterLink title="Operations" />
                        <FooterLink title="Team members" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    Resources

                    <FooterLink title="Blog" />
                    <FooterLink title="Utilization rate calculator" />
                    <FooterLink title="Billable rate calculator" />
                    <FooterLink title="Signature maker" />
                    <FooterLink title="How to write a contract" />
                    <FooterLink title="Self-employed taxes hub" />
                    <FooterLink title="Self-employed tax deductions" />
                    <FooterLink title="Comparisons" />
                    <FooterLink title="All resources" />
                </div>

                <div className="flex flex-col gap-2">
                    Templates
                    <FooterLink title="Contracts" />
                    <FooterLink title="Proposals" />
                    <FooterLink title="Invoices" />
                    <FooterLink title="Forms" />
                    <FooterLink title="Quotes" />
                    <FooterLink title="Scopes of work" />
                    <FooterLink title="Agreements" />
                    <FooterLink title="Briefs" />
                    <FooterLink title="Timesheets" />
                </div>

                <div className="flex flex-col gap-2">
                    Company
                    <FooterLink title="Help center" />
                    <FooterLink title="Contact us" />
                    <FooterLink title="Privacy" />
                    <FooterLink title="Terms and conditions" />
                    <FooterLink title="Careers" />

                    <div className="pt-16 flex flex-col gap-2">
                        <FooterLink title="Affiliate program" />
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-6 text-gray-400 text-xs border-t-1 border-gray-700 py-4 max-w-7xl">
            <div className="flex items-center">
                <img src="/logos/logo2.svg" className="h-10" />

                © 2025 Birch Technologies Inc
            </div>

            <div>
                Birch partners with Stripe Payments Company for money transmission services and account services with funds held at Evolve Bank & Trust and Fifth Third Bank, Members FDIC. Birch cards (Visa® Prepaid Cards) are issued by Celtic Bank, Member FDIC.
            </div>

            <div>
                *Stripe Treasury Accounts are eligible for FDIC pass-through deposit insurance if they meet certain requirements. The accounts are eligible only to the extent pass-through insurance is permitted by the rules and regulations of the FDIC, and if the requirements for pass-through insurance are satisfied. The FDIC insurance applies up to 250,000 USD per depositor, per financial institution, for deposits held in the same ownership capacity. Neither Stripe nor Birch are an FDIC insured institution. The FDIC’s deposit insurance coverage only protects against the failure of an FDIC insured depository institution.Birch is not a law firm, and does not provide legal services, advice, or representation. Some product imagery is for illustrative purposes only and the actual product experience may differ.
            </div>

            <div>
                **Beyond the 7-day trial, there are no monthly fees and no minimums — usage is conditioned to being on a Birch paid plan, see details here: https://www.helloBirch.com/pricing
            </div>
        </div>
    </div>
}
